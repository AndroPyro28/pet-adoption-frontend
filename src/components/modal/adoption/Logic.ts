import { totalmem } from "os";
import React from "react";
import { AdoptionRecord, AdoptionUpdate } from "../../../models/Adoption.ts";
import { Pet } from "../../../models/Pet";
import { User } from "../../../models/User";
import {
  useCreateAdoptionRequestMutation,
  useUpdateAdoptionRequestMutation,
} from "../../../services/adoptionRecordApis";
import { toggleLoading } from "../../../redux/loaderSlice";
import { useDispatch } from "react-redux";

interface Props {
  petData?: Pet;
  user?: User;
  setAdoptionDataPet?: React.Dispatch<React.SetStateAction<Pet>>;
  setAdoptionDataRecord?: React.Dispatch<React.SetStateAction<AdoptionRecord>>;
  date?: string;
  time?: string;
  toast?: any;
  adoptionData?: AdoptionRecord;
}

function Logic({
  petData,
  user,
  date,
  time,
  setAdoptionDataPet,
  adoptionData,
  setAdoptionDataRecord,
  toast,
}: Props) {
  const [createAdoptionRequest] = useCreateAdoptionRequestMutation();
  const [updateAdoptionRequest] = useUpdateAdoptionRequestMutation();
  const dispatch = useDispatch();

  const submitAdoptionForm = async (): Promise<void> => {
    try {
      if (!date || !time) {
        return toast("Please choose a schedule!", { type: "warning" });
      }
      const { id: petId } = petData!;
      const { id: userId } = user!;
      dispatch(toggleLoading(true));
      const res = await createAdoptionRequest({
        adopteeId: petId!,
        adopterId: userId,
        schedule: `${date}T${time}:00.000Z`,
      });
      if ("data" in res) {
        toast(
          "Adoption application submitted, please wait for our text confirmation!",
          { type: "success" }
        );
        dispatch(toggleLoading(false));
        setAdoptionDataPet!({} as Pet)
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleUpdateAdoptionRequest = async (
    status: "REJECTED" | "APPROVED"
  ) => {
    try {
      const { id } = adoptionData!;
      let data = {};
      const schedule = `${date}T${time}.000Z`;
      if (status == "APPROVED") {
        if (!date || !time) {
          return toast("Please choose a schedule!", { type: "warning" });
        }
        data = { status, schedule };
      }
      if (status == "REJECTED") {
        data = { status };
      }
      dispatch(toggleLoading(true));
      const res = await updateAdoptionRequest({ id, data } as {
        id: number;
        data: AdoptionUpdate;
      });
      console.log(res, schedule);
      if ("data" in res) {
        toast(`Adoption ${status}!`, { type: "info" });
        dispatch(toggleLoading(false));
        setAdoptionDataRecord!({} as AdoptionRecord)
      }
    } catch (error) {
      console.error(error);
      return toast("Something went wrong", { type: "info" });
    }
  };

  return { submitAdoptionForm, handleUpdateAdoptionRequest };
}

export default Logic;
