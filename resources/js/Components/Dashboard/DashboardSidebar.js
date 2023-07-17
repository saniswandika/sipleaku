import React, { useState } from "react";
import logoWhiteSvg from "@/Assets/Images/logo-white.svg";
import BerandaIcon from "@/Icon/BerandaIcon";
import PermohonanIcon from "@/Icon/PermohonanIcon";
import DataIcon from "@/Icon/DataIcon";
import AktivitasIcon from "@/Icon/AktivitasIcon";
import ProfileIcon from "@/Icon/ProfileIcon";
import InputIcon from "@/Icon/InputIcon";
import CustomLink from "../CustomLink";
import ListIcon from "@/Icon/ListIcon";

const DashboardSidebar = ({ userRole }) => {
    const [currentPage, _] = useState(route().current().split("/")[0]);
    return (
        <div className="dashboard-sidebar-content">
            <div className="dashboard-logo-container">
                <img className="w-24 select-none" src={logoWhiteSvg} />
            </div>
            <ul className="dashboard-nav-container">
                {userRole == 1 || userRole == 3 ? ( //if user is admin or kadis
                    <>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="beranda"
                            >
                                <BerandaIcon className="stroke-current text-gray-100 w-5 icon" />
                                Beranda
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="permohonan"
                            >
                                <PermohonanIcon className="stroke-current text-gray-100 w-5 icon" />
                                Permohonan
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="daftar-lks"
                            >
                                <ListIcon className="stroke-current text-gray-100 w-5 icon" />
                                Daftar LKS
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="aktivitas"
                            >
                                <AktivitasIcon className="stroke-current text-gray-100 w-5 icon" />
                                Aktivitas
                            </CustomLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="beranda"
                            >
                                <BerandaIcon className="stroke-current text-gray-100 w-5 icon" />
                                Beranda
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="profile"
                            >
                                <ProfileIcon className="stroke-current text-gray-100 w-5 icon" />
                                Profil LKS
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink
                                currentPage={currentPage}
                                link="input-kegiatan"
                            >
                                <InputIcon className="stroke-current text-gray-100 w-5 icon" />
                                Input Kegiatan
                            </CustomLink>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default DashboardSidebar;
