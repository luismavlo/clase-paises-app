import React from 'react'
import { Link } from "react-router-dom";

const Aside = () => {
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 aside">
                <h2>Busquedas</h2>
                <hr />
                <ul className="space-y-2">
                    <li>
                        <Link to="/paises" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="ml-3">Buscar por pais</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/region" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="flex-1 ml-3 whitespace-nowrap">Buscar por región</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/login" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside