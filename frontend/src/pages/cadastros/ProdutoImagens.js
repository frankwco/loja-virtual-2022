import React, { useState, useEffect, useRef } from 'react';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import '../../assets/layout/ProdutoImagens.css';
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import { useParams } from 'react-router-dom';
import { ProdutoService } from '../../service/cadastros/ProdutoService';
import { ProdutoImagensService } from '../../service/cadastros/ProdutoImagensService';
import { Toast } from 'primereact/toast';
import { Image } from 'primereact/image';


const ProdutoImagens = () => {
    let objetoNovo = {
        file: null,
        idProduto: null,
        nome: null
    };
    let parametros = useParams();
    const [objetos, setObjetos] = useState(null);
    const [objetoDeleteDialog, setObjetoDeleteDialog] = useState(false);
    const [objeto, setObjeto] = useState(objetoNovo);
    const [produto, setProduto] = useState({});
    const toast = useRef(null);
    const dt = useRef(null);
    const produtoService = new ProdutoService();
    const produtoImagensService = new ProdutoImagensService();

    useEffect(() => {
        if (objetos == null) {
            produtoService.buscarId(parametros.id).then(result => {
                setProduto(result.data);
                buscarPorProduto(result.data.id);
            });
        }
        //setObjetos([{},{}])
    }, [objetos]);

    const buscarPorProduto = (idProduto) => {
        produtoImagensService.buscarPorProduto(idProduto).then(result => {
            setObjetos(result.data);
        })
    }

    const hideDeleteObjetoDialog = () => {
        setObjetoDeleteDialog(false);
    }

    const confirmDeleteObjeto = (objeto) => {
        setObjeto(objeto);
        setObjetoDeleteDialog(true);
    }

    const deleteObjeto = () => {

           produtoImagensService.excluir(objeto.id).then(data => {
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Removido', life: 3000 });
                setObjetos(null);
                setObjetoDeleteDialog(false);    
            }); 
    }

    const uploadImagens = (event) => {
        produtoImagensService.uploadImagens({ file: event.files[0], idProduto: produto.id }).then(data => {
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Imagem inserida', life: 3000 });
            setObjetos(null);
        });
        event.options.clear();
    }

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-content">
                        <Image src={'data:image;base64, ' + data.arquivo} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} preview />
                        <Button icon="pi pi-times" className="p-button-danger" label="Remover" onClick={() => confirmDeleteObjeto(data)}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <FileUpload customUpload auto uploadHandler={uploadImagens} chooseLabel="Adicionar Imagem" mode="basic" accept="image/*" maxFileSize={1000000} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <h4>{produto.descricaoCurta}</h4>
                </div>

            </div>
        );
    }

    const deleteObjetoDialogFooter = (
        <>
            <Button label="Não" icon="pi pi-times" className="p-button-text" onClick={hideDeleteObjetoDialog} />
            <Button label="Sim" icon="pi pi-check" className="p-button-text" onClick={deleteObjeto} />
        </>
    );

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <Toast ref={toast} />

            <div className="card">
                <DataView value={objetos} layout={'grid'} header={header}
                    itemTemplate={renderGridItem} />
            </div>

            <Dialog visible={objetoDeleteDialog} style={{ width: '450px' }} header="Confirmação" modal footer={deleteObjetoDialogFooter} onHide={hideDeleteObjetoDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {objeto && <span>Deseja Excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ProdutoImagens, comparisonFn);