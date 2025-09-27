<Layout>
    <Template>
        <ErrorBoundary fallback={<Error/>}>
            <Suspense fallback={<Loading/>}>
                <ErrorBoundary fallback={<NotFound/>}>
                    <Page/>
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>

This is the Component Hierarchy of the some special files which act as component and solve some of our problems