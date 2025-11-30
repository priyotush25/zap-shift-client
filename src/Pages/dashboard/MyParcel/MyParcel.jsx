import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever, MdSearch } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";



const MyParcel = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({

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
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }

    const handlePayment =async (parcel) => {
        console.log("payment", parcel);

        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post("/payment-checkout-session", paymentInfo)

        window.location.href = res.data.url;
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
                        <th>Payment </th>
                        <th>Delivery Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        parcels.map((parcel, idx) => <tr key={parcel._id}>
                            <th>{idx + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.cost}</td>
                            <td>

                                {
                                    parcel.paymentStatus == "paid" ? <span className="text-gray-400">Paid</span> : <Link to={`/dashboard/payment/${parcel._id}`}><button onClick={() => handlePayment(parcel)} className="btn btn-square bg-primary">Pay</button></Link>
                                }
                            </td>
                            <td>{parcel.deliveryStatus}</td>
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