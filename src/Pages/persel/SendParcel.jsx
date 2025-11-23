import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Button from "../../shared/button/Button";
import Card from "../../shared/card.jsx/Card";
import Input from "../../shared/field/Input";

const SendParcel = () => {

    const regions = useLoaderData();

    const duplicateRegion = regions.map(c => c.region)
    const region = [...new Set(duplicateRegion)];


    const { handleSubmit, register, control, formState: { errors } } = useForm()

    const handleFormSubmit = (data) => {
        console.log(data);

    }



    const senderRegion = useWatch({ control, name: 'senderRegion' });



    // district by region
    const districtByRegion = (region) => {
        const regionDistrict = regions.filter((c) => c.region === region);
        const districts = regionDistrict.map((d) => d.district)

        return districts;
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
                            {...register("ParcelName")}
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
                            {...register("SenderName")}
                        />


                        <Input
                            label={"Sender Phone No"}
                            inputClass="mb-4"
                            {...register("SenderNumber")}
                        />

                        {/* sender district */}
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


                            <select {...register("SenderDistrict")} defaultValue="Pick a District" className="select text-lg font-medium">

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
                            {...register("ReceiverName")}
                        />


                        <Input
                            label={"Receiver Address"}
                            inputClass="mb-4"
                            {...register("ReceiverAddress")}
                        />


                        <Input
                            label={"Receiver Contact No"}
                            inputClass="mb-4"
                            {...register("ReceiverNumber")}
                        />


                        <Input
                            label={"Receiver District"}
                            inputClass="mb-4"
                            {...register("ReceiverDistrict")}
                        />

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