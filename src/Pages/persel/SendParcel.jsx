import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import Button from "../../shared/button/Button";
import Card from "../../shared/card.jsx/Card";
import Input from "../../shared/field/Input";

const SendParcel = () => {

    const regions = useLoaderData();

    const duplicateRegion = regions.map(c => c.region)
    const region = [...new Set(duplicateRegion)];


    const { handleSubmit, register, control, formState: { errors } } = useForm()




    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });


    // district by region
    const districtByRegion = (region) => {
        const regionDistrict = regions.filter((c) => c.region === region);
        const districts = regionDistrict.map((d) => d.district)

        return districts;
    }


    const handleFormSubmit = (data) => {
        console.log(data);

        const isDocument = data.parcelType === "document";
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        console.log(isSameDistrict);
        const parcelWeight = parseFloat(data.parcelWeight)
        let cost = 0;


        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }







        Swal.fire({
            title: "Are you sure?",
            text: `Total Cost : ${cost}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });





        console.log(cost);
    }




    return (
        <Card className={"bg-white lg:p-20"}>
            <h1 className="text-4xl font-black text-gray-800 mb-12">Send A Parcel</h1>
            <h1 className="text-2xl font-bold text-gray-600 mb-6">Enter your parcel details</h1>



            <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>

                {/* document */}
                <div className="flex items-center gap-10 my-10">

                    <label className="flex items-center text-xl font-bold gap-3">
                        <input
                            {...register("parcelType")}
                            value="document"
                            type="radio"
                            className="radio"
                        />
                        Document
                    </label>

                    <label className="flex items-center text-xl font-bold gap-3">
                        <input
                            {...register("parcelType")}
                            value="non-document"
                            type="radio"
                            className="radio"
                        />
                        Non Document
                    </label>

                </div>

                {/* parcel weight */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
                    <div className="flex-1" >
                        <Input
                            label="Parcel Name"
                            {...register("parcelName")}
                        />
                    </div>
                    <div className="flex-1" >
                        <Input
                            label="Parcel Weight (KG)"
                            {...register("parcelWeight")}
                        />
                    </div>
                </div>


                {/* receive */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex-1">
                        <h1 className="text-2xl font-black text-gray-700 mb-5">Sender Details</h1>

                        <Input
                            label={"Sender Name"}
                            inputClass="mb-4 w-full"
                            {...register("senderName")}
                        />


                        <Input
                            label={"Sender Phone No"}
                            inputClass="mb-4"
                            {...register("senderNumber")}
                        />

                        {/* sender region */}
                        <fieldset className="fieldset mb-4">
                            <legend className="block text-gray-600 text-xl font-semibold mb-1">Sender Region</legend>


                            <select {...register("senderRegion")} defaultValue="Pick a Region" className="select text-lg font-medium">

                                {
                                    region.map((region, idx) => <option key={idx} value={region}> {region}</option>)
                                }
                            </select>
                        </fieldset>


                        {/* sender district */}
                        <fieldset className="fieldset mb-4">
                            <legend className="block text-gray-600 text-xl font-semibold mb-1">Sender District</legend>


                            <select {...register("senderDistrict")} defaultValue="Pick a District" className="select text-lg font-medium">

                                {
                                    districtByRegion(senderRegion).map((d, idx) => <option key={idx} value={d}>{d}</option>)
                                }
                            </select>
                        </fieldset>



                        <Input
                            label={"Pickup Instruction"}
                            inputClass="mb-4"
                            {...register("SenderInstruction")}
                        />

                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-black text-gray-700 mb-5">Receiver Details</h1>

                        <Input
                            label={"Receiver Name"}
                            inputClass="mb-4"
                            {...register("receiverName")}
                        />





                        <Input
                            label={"Receiver Contact No"}
                            inputClass="mb-4"
                            {...register("receiverNumber")}
                        />


                        {/* receiver region */}
                        <fieldset className="fieldset mb-4">
                            <legend className="block text-gray-600 text-xl font-semibold mb-1">Receiver Region</legend>


                            <select {...register("receiverRegion")} defaultValue="Pick a Region" className="select text-lg font-medium">

                                {
                                    region.map((region, idx) => <option key={idx} value={region}> {region}</option>)
                                }
                            </select>
                        </fieldset>


                        {/* receiver district */}
                        <fieldset className="fieldset mb-4">
                            <legend className="block text-gray-600 text-xl font-semibold mb-1">Receiver District</legend>


                            <select {...register("receiverDistrict")} defaultValue="Pick a District" className="select text-lg font-medium">

                                {
                                    districtByRegion(receiverRegion).map((d, idx) => <option key={idx} value={d}>{d}</option>)
                                }
                            </select>
                        </fieldset>





                        <Input
                            label={"Pickup Instruction"}
                            inputClass="mb-4"
                            {...register("ReceiverInstruction")}
                        />

                    </div>
                </div>

                <Button type="submit" className={"bg-primary"}>Proceed to Confirm Booking</Button>

            </form>
        </Card>
    );
};

export default SendParcel;