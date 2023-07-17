import Dashboard from "@/Layouts/Dashboard";
import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import config from "@/config";
import "@/Assets/Css/my-table.css";

import { initData } from "@/Utils/utilPermohonan";
import Spinner from "@/Components/Spinner";
import { Modal } from "@/Components/Dashboard/Modal";
import PengurusLksCmp from "@/Components/Detail/PengurusLksCmp";
import DetailLksCmp from "@/Components/Detail/DetailLksCmp";
import LegalitasLksCmp from "@/Components/Detail/LegalitasLksCmp";
import ArrowDownIcon from "@/Icon/ArrowDownIcon";

const DetailLks = (props) => {
    const { data, setData } = useForm({
        ...initData,
    });

    const [showModal, setShowModal] = useState(false);
    const [srcFileViewer, setSrcFileViewer] = useState(null);

    useEffect(() => {
        setData((prevState) => ({ ...prevState, ...props.data }));
    }, []);

    const makeModalShow = (data) => {
        setShowModal(true);
        setTimeout(() => {
            setSrcFileViewer(data);
        }, 1000);
    };

    const generateStatus = (status_id) => {
        switch (status_id) {
            case 2:
                return "Menunggu verifikasi Admin";
            case 3:
                return "Menunggu persetujuan Kepala Dinas";
            case 5:
                return "Telah disetujui";
            default:
                return "";
        }
    };

    const normalizeDate = (date) => {
        const newDate = new Date(date);
        let month = newDate.getMonth() + 1;

        if (month < 10) {
            month = "0" + month;
        }

        return newDate.getDate() + "-" + month + "-" + newDate.getFullYear();
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <Dashboard auth={props.auth} totalNotify={props.totalNotify}>
            <Head title="Detail Lks | Sipelaku Sosial" />
            {showModal && (
                <Modal
                    backdropClick={() => {
                        setShowModal(false);
                        setSrcFileViewer(null);
                    }}
                >
                    <div className="w-4/5 h-full flex items-center bg-white justify-center overflow-hidden rounded animate-bounce-in">
                        {srcFileViewer == null ? (
                            <Spinner
                                width={32}
                                height={32}
                                type="primary-spinner"
                            />
                        ) : (
                            <iframe
                                className="w-full h-full"
                                loading="lazy"
                                title={srcFileViewer}
                                aria-hidden="true"
                                src={srcFileViewer}
                            ></iframe>
                        )}
                    </div>
                </Modal>
            )}
            <div className="text-xl font-bold mb-5 flex items-center">
                <div
                    onClick={goBack}
                    className="transform rotate-90 cursor-pointer mr-2"
                >
                    <ArrowDownIcon width={32} height={32} />
                </div>
                <span onClick={goBack} className="cursor-pointer">
                    Detail LKS
                </span>
            </div>
            <div className="flex flex-col lg:flex-row jusity-between gap-y-4 lg:gap-y-0 gap-x-0 lg:gap-x-4 w-full">
                <div className="w-full lg:w-1/3 flex flex-col gap-y-3">
                    <div className="min-h-80 py-3 w-full rounded shadow bg-white relative overflow-hidden flex flex-col gap-y-2 px-2">
                        {data.logo != "" && (
                            <img
                                src={config.drive_url + data.logo}
                                className="max-h-full max-w-full"
                            />
                        )}

                        <div className="border-t w-full flex items-center justify-center flex-wrap py-5">
                            <strong className="mr-1">ID LKS:</strong>
                            <span>{data.no_reg}</span>
                            <div className="w-full pa-2 mt-2 flex items-center justify-center">
                                <div className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                                    <span className="font-bold">Status: </span>
                                    {generateStatus(data.status_id)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <LegalitasLksCmp
                        urlSlug={props.data.url_slug}
                        data={data}
                        makeModalShow={makeModalShow}
                    />
                </div>

                <div className="w-full lg:w-2/3 flex flex-col gap-y-3">
                    <DetailLksCmp data={data} />
                    <PengurusLksCmp data={data} />

                    <div className="w-full rounded bg-white shadow">
                        <div className="flex p-3 border-b justify-between items-center">
                            <div className=" font-bold text-md">
                                Kegiatan LKS
                            </div>
                            {props.activities.length > 0 && (
                                <Link
                                    href={route(
                                        "aktivitas/url_slug",
                                        props.data.url_slug
                                    )}
                                    className="text-sm py-1 px-2 bg-primary-600 cursor-pointer select-none active:bg-primary-800 rounded text-white shadow"
                                >
                                    Lihat semua
                                </Link>
                            )}
                        </div>
                        <div className="px-3">
                            {props.activities.length > 0 ? (
                                <table className="w-full profile-table">
                                    <thead>
                                        <tr className="font-semibold border-b">
                                            <td width={200} className="text-sm">
                                                Tanggal Kegiatan
                                            </td>
                                            <td className="text-sm">
                                                Nama Kegiatan
                                            </td>
                                            <td className="text-center text-xs font-bold">
                                                Sasaran
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.activities.map((res, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-sm align-top">
                                                        {normalizeDate(
                                                            res.tanggal
                                                        )}
                                                    </td>
                                                    <td className="text-sm font-semibold align-top">
                                                        {res.nama}
                                                    </td>
                                                    <td className="text-center text-sm align-top">
                                                        {res.sasaran}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="p-4 h-auto md:h-32 flex flex-col justify-center">
                                    <div className="text-lg font-semibold text-center">
                                        Belum ada aktivitas
                                    </div>
                                    <div className="text-xs text-center">
                                        Lembaga kesejahteraan Sosial ini masih
                                        belum mengisi aktivitas kegiatan.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default DetailLks;
