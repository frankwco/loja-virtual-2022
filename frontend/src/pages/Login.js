import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import React from 'react';

const Login = () => {

    return (
        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <img src="images/blocks/logos/hyper.svg" alt="hyper" height="50" className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                <button className="p-link font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</button>
            </div>

            <div>
                <label htmlFor="email1" className="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" className="w-full mb-3" />

                <label htmlFor="password1" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" className="w-full mb-3" />

                <div className="flex align-items-center justify-content-between mb-6">
                    <div className="flex align-items-center">
                        <Checkbox inputId="rememberme1" binary className="mr-2"  />
                        <label htmlFor="rememberme1">Remember me</label>
                    </div>
                    <button className="p-link font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</button>
                </div>

                <Button label="Sign In" icon="pi pi-user" className="w-full" />
            </div>
        </div>
    </div>
    );
}

export default Login;
