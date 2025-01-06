import React from 'react'

const Navabar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light w-auto h-14 bg-black dark:bg-white p-4">
            <div className="flex justify-between container-fluid">
                <div>
                    <a className="navbar-brand text-white dark:text-black" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <ul className="flex flex-row gap-20 navbar-nav justify-between">
                        <li className="nav-item basis-1/4">
                            <a className="nav-link active text-white dark:text-black" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item basis-1/4">
                            <a className="nav-link text-white dark:text-black" href="#">Features</a>
                        </li>
                        <li className="nav-item basis-1/4">
                            <a className="nav-link text-white dark:text-black" href="#">Pricing</a>
                        </li>
                        <li className="nav-item basis-1/4">
                            <a className="nav-link disabled text-white dark:text-black">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="h-10 w-16 rounded-2xl bg-white dark:bg-black -mt-4" type="submit">Search</button>   
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navabar