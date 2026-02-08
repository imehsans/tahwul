import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProgressDetails } from '../../data/mockData';
import { ArrowLeft, FileText, CheckCircle, Clock, FileCheck } from 'lucide-react';

import totalEvedance from '../../assets/icons/dashboard-icon/total-evedance-1.svg';
import underReview from '../../assets/icons/dashboard-icon/under-review-evediance.svg';
import inProgress from '../../assets/icons/dashboard-icon/inprogress-eved.svg';
import completed from '../../assets/icons/dashboard-icon/completed-evedance.svg';

const ProgressDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const { data: details, isLoading } = useQuery({
        queryKey: ['progressDetails', id],
        queryFn: () => getProgressDetails(id)
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (!details) return <div>Not found</div>;

    return (
        <div className="">
            {/* Back Button & Title */}
            <div className="flex items-center gap-2 mb-4 cursor-pointer w-fit" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-4 h-4 text-[#1D3557]" />
                <h1 className="text-2xl font-bold text-[#1D3557]">{details.title}</h1>
            </div>

            {/* Top Card */}
            <div className="bg-white rounded-lg p-4 border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
                <div>
                    <span className=" px-2.5 mb-2 py-1 rounded-full text-md  border text-[#8597A8] border-[#E5E7EB]">
                        {details.tag}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1D3557]  mt-2">{details.title}</h2>
                    <p className="text-md text-[#8597A8] mt-2">{details.description}</p>
                </div>

                {/* Circular Progress */}
                <div className="relative w-20 h-20 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="#F3F4F6"
                            strokeWidth="6"
                            fill="transparent"
                        />
                        <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="#22C55E"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={226}
                            strokeDashoffset={226 - (226 * details.progress) / 100}
                            className="transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-[#1D3557]">{details.progress}%</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatBox
                    icon={<span className="text-red-500 w-full h-full" ><img src={totalEvedance} alt="" /></span>}
                    count={details.stats.totalEvidence}
                    label="Total Evidence"
                />
                <StatBox
                    icon={<span className="text-orange-500 w-full h-full" ><img src={underReview} alt="" /></span>}
                    count={details.stats.underReview}
                    label="Under Review Evidence"
                />
                <StatBox
                    icon={<span className="text-red-400 w-full h-full" ><img src={inProgress} alt="" /></span>}
                    count={details.stats.inProgress}
                    label="In Progress Evidence"
                />
                <StatBox
                    icon={<span className="text-green-500 w-full h-full" ><img src={completed} alt="" /></span>}
                    count={details.stats.completed}
                    label="Completed Evidence"
                />
            </div>

            {/* Tabs */}
            <div className="bg-[#E0E8ED80] p-0.5 rounded-md w-fit flex mb-4 gap-1.5">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-2 rounded-md text-md  transition-all ${activeTab === 'overview' ? 'bg-white shadow-sm text-[#1D3557]' : 'text-[#8597A8] hover:text-gray-700'
                        }`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setActiveTab('evidence')}
                    className={`px-6 py-2 rounded-md text-md  transition-all ${activeTab === 'evidence' ? 'bg-white shadow-sm text-[#1D3557]' : 'text-[#8597A8] hover:text-gray-700'
                        }`}
                >
                    Evidence
                </button>
            </div>

            {activeTab === 'overview' ? (
                <>
                    <div className="bg-white border border-[#E5E7EB] rounded-lg ">
                        <Section
                            title="Objective"
                            content={details.objective}
                        />
                        <Section
                            title="Implementation Requirements"
                            content={
                                <div className="space-y-2">
                                    {details.requirements.map((req, i) => (
                                        <p key={i} className="leading-relaxed">{req}</p>
                                    ))}
                                </div>
                            }
                        />
                        <Section
                            title="Evidence Documents"
                            content="Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months."
                        />
                        <Section
                            title="Related Regulations"
                            content={details.relatedRegulations}
                        />
                        <Section
                            title="Scope"
                            content={details.scope}
                        />
                    </div>
                    {/* Leaders Footer */}
                    <div className="bg-white rounded-lg p-6 border border-[#E5E7EB]  mt-4">
                        <h3 className="font-bold text-[#1D3557] mb-4">Leaders</h3>
                        <div className="flex flex-wrap gap-4">
                            {details.leaders.map((leader, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 pr-6 rounded-lg border border-gray-100">
                                    <img src={leader.image} alt={leader.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-sm text-[#1D3557]">{leader.name}</p>
                                        <p className="text-xs text-gray-500">{leader.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Table & Comments */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Evidence Table */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4">Document Number</th>
                                        <th className="px-6 py-4">Document Name</th>
                                        <th className="px-6 py-4">Document Lead</th>
                                        <th className="px-6 py-4">Document Preparer</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4">Due Date</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {details.evidenceTable?.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 text-gray-600 font-medium">{row.documentNumber}</td>
                                            <td className="px-6 py-4 text-[#1D3557] font-medium">{row.documentName}</td>
                                            <td className="px-6 py-4 text-gray-600">{row.documentLead}</td>
                                            <td className="px-6 py-4 text-gray-600">{row.documentPreparer}</td>
                                            <td className="px-6 py-4 text-gray-500">{row.date}</td>
                                            <td className="px-6 py-4 text-gray-500">{row.dueDate}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.statusColor}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Comments Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[#1D3557] mb-6">Comments</h3>
                            <div className="space-y-6 mb-6">
                                {details.comments?.map((comment) => (
                                    <div key={comment.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/30">
                                        <img src={comment.image} alt={comment.user} className="w-10 h-10 rounded-full" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-bold text-[#1D3557]">{comment.user}</h4>
                                                <span className="text-xs text-gray-400">{comment.date}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{comment.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Post Comment Input */}
                            <div className="space-y-3">
                                <textarea
                                    placeholder="Write your comment here..."
                                    className="w-full p-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 resize-none min-h-[100px]"
                                ></textarea>
                                <button className="bg-[#1D3557] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#152a45] transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> Post Comment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Recent Activities */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[#1D3557] mb-6">Recent Activities</h3>
                            <div className="space-y-6">
                                {details.recentActivities?.map((activity) => (
                                    <div key={activity.id} className="relative pl-6 pb-6 border-l border-gray-100 last:pb-0 last:border-0">
                                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-white"></div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium text-[#1D3557] leading-tight">
                                                {activity.content}
                                            </p>
                                            <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const StatBox = ({ icon, count, label }) => (
    <div className="bg-white px-4 py-5 rounded-lg border border-[#E5E7EB]  flex items-center gap-4">
        <div className=" w-6 h-6">
            {icon}
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl text-[#1D3557]">{count}</h4>
            <p className="text-md text-[#8597A8] ">{label}</p>
        </div>
    </div>
);

const Section = ({ title, content }) => (
    <div className="flex flex-col first:pt-2 last:pb-2 divide-x divide-[#E5E7EB] md:flex-row   ">
        <div className="w-fit py-2   md:w-48 ps-6 pe-2 flex-shrink-0  text-[#1D3557] ">
            <div className='text-md rounded-lg bg-[#F4F5F7] px-4 py-4 h-full my-auto'>
                {title}
            </div>
        </div>

        <div className="flex-1 py-2 text-sm ps-2 pe-6  text-gray-600 leading-relaxed font-normal">
            <div className='rounded-lg text-md font-normal bg-[#F4F5F7] px-4 py-2.5 h-full '>
                {content}
            </div>
        </div>
    </div>
);

export default ProgressDetails;
