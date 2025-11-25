import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever, MdSearch } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";



const MyParcel = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({

        queryKey: ["myParcel", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })

    // handle parcel delete
    const handleParcelDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Agree with the Delete",
            text: `Are your sure delete this item`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
            confirmButtonText: "I agree"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res);

                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }










    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        parcels.map((parcel, idx) => <tr key={parcel._id}>
                            <th>{idx + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.cost}</td>
                            <td>Blue</td>
                            <td className="flex items-center gap-2">

                                <button className="btn btn-square">
                                    <MdSearch />
                                </button>
                                <button className="btn btn-square">
                                    <FaRegEdit />
                                </button>
                                <button
                                    onClick={() => handleParcelDelete(parcel._id)}
                                    className="btn btn-square">
                                    <MdDeleteForever />
                                </button>


                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyParcel;