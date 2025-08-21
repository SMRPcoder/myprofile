import React from 'react'
import NestJsSVG from '../icons/NestJsSVG'
import NextJsSVG from '../icons/NextJsSVG'
import ReactSVG from '../icons/ReactSVG'
import ExpressJsSVG from '../icons/ExpressJsSVG'
import MongooseSVG from '../icons/MongooseSVG'
import JwtSVG from '../icons/JwtSVG'
import JavascriptSVG from '../icons/JavascriptSVG'
import NodejsSVG from '../icons/NodejsSVG'
import PostgreSqlSVG from '../icons/PostgreSqlSVG'
import MongoDbSVG from '../icons/MongoDbSVG'
import RedisSVG from '../icons/RedisSVG'
import SequelizeSVG from '../icons/SequelizeSVG'
import DatabaseSVG from '../icons/DatabaseSVG'
import PythonSVG from '../icons/PythonSVG'
import FastApiSVG from '../icons/FastApiSVG'
import SqlASVG from '../icons/SqlASVG'
import PandasSVG from '../icons/PandasSVG'
import GolangSVG from '../icons/GolangSVG'
import FiberSVG from '../icons/FiberSVG'
import GormSVG from '../icons/GormSVG'
import TypescriptSVG from '../icons/TypescriptSVG'

export default function SkillCard2Component() {
    return (
        <div className='flex flex-wrap justify-center gap-10 mt-10' >
            <div className='flex lg:flex-row flex-col gap-20' >
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                        <button className="group profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <NestJsSVG />
                                <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    NestJs
                                </span>
                            </span>
                        </button>
                        <button className="group profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <ExpressJsSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                ExpressJs
                            </span>
                        </button>
                        <button className="group profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <ReactSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                ReactJs
                            </span>
                        </button>
                        <button className="group profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <NextJsSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                NextJs
                            </span>
                        </button>
                        <button className="group profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <JwtSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                JWT
                            </span>
                        </button>
                        <button className="group profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <TypescriptSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Typescript
                            </span>
                        </button>
                        <button className="group profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <JavascriptSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Javascript
                            </span>
                        </button>
                        <button className="group profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span className="w-20 h-20 inline-block">
                                    <NodejsSVG />
                                </span>
                                <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    NodeJs
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                        <button className="group profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <PostgreSqlSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                PostgreSQL
                            </span>
                        </button>
                        <button className="group profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <MongoDbSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                MongoDB
                            </span>
                        </button>
                        <button className="group profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <SequelizeSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Sequelize
                            </span>
                        </button>
                        <button className="group profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <MongooseSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Mongoose
                            </span>
                        </button>
                        <button className="group profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <RedisSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Redis
                            </span>
                        </button>

                        <button className="group profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span className="w-20 h-20 inline-block">
                                    <DatabaseSVG />
                                </span>
                                <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Database
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-20' >
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                        <button className="group profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <FastApiSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                FastAPI
                            </span>
                        </button>
                        <button className="group profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <SqlASVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Sqlalchemy
                            </span>
                        </button>
                        <button className="group profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <PandasSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Pandas
                            </span>
                        </button>


                        <button className="group profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span className="w-20 h-20 inline-block">
                                    <PythonSVG />
                                </span>
                                <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Python
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                        <button className="group profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <FiberSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Fiber
                            </span>
                        </button>
                        <button className="group profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <GormSVG />
                            </span>
                            <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Gorm
                            </span>
                        </button>


                        <button className="group profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span className="w-20 h-20 inline-block">
                                    <GolangSVG />
                                </span>
                                <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Golang
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
