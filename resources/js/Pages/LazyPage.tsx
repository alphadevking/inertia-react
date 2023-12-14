import { Suspense, LazyExoticComponent, ComponentType, lazy } from 'react';
import { Head } from '@inertiajs/react';

// Define a type for the component that will be lazily loaded
type LazyComponentType = LazyExoticComponent<ComponentType<any>>;

// Lazy load the component
const LazyComponent: LazyComponentType = lazy(() => import('../Components/InteractiveComponent'));

const LazyPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Lazy Page</title>
                <link rel='icon' href='https://cdn.hashnode.com/res/hashnode/image/upload/v1646146562313/f4J4Xidrt.png' />
            </Head>
            <Suspense fallback={
                <div className='w-screen'>
                    <div className='flex items-center justify-center min-h-screen m-auto'>Loading...</div>
                </div>
            }>
                <div>
                    <LazyComponent />
                </div>
            </Suspense>
        </>
    )
}

export default LazyPage;