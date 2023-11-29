import React from 'react';
import { Head } from '@inertiajs/react';

interface HelloWorldProps {
    name: string;
    className?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name, className }) => {
    return <a href='https://inertiajs.com/' target='_blank' className={className}>Hello, {name}!</a>;
};

const Hello: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Head>
                <title>Hello Inertia</title>
                <link rel='icon' href='https://cdn.hashnode.com/res/hashnode/image/upload/v1646146562313/f4J4Xidrt.png'/>
            </Head>
            <div className='grid gap-5'>
                <img className='w-full mx-auto pointer-events-none select-none md:w-1/3' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646146562313/f4J4Xidrt.png" alt="inertia" />
                <HelloWorld className='mx-auto text-2xl text-center duration-500 w-fit hover:underline underline-offset-4' name="Inertia.js" />
            </div>
        </div>
    );
};

export default Hello;
