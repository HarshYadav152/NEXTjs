"use client"

export default function GlobalError() {
    return (
        <>
            <html>
                <body>

                    <div>
                        <h2>Something went wrong!</h2>
                        <button onClick={() => {
                            window.location.reload(); // refresh the page
                        }}>
                            Refresh
                        </button>
                    </div>
                </body>
            </html>
        </>
    )
}