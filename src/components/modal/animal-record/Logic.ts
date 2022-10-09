import { Pet } from "../../../models/Pet";
import {useCreateRecordMutation} from "../../../services/animalRecordApis"
import {toggleLoading} from "../../../redux/loaderSlice"
import {useDispatch} from "react-redux";
interface Props {
  setRecordData: React.Dispatch<React.SetStateAction<Pet>>,
  recordData: Pet,
  toast: any,
  setOpenAnimalRecordModal: React.Dispatch<React.SetStateAction<Boolean>>
}

function Logic({setRecordData, recordData, toast, setOpenAnimalRecordModal} : Props) {
const [createRecord] = useCreateRecordMutation();
const dispatch = useDispatch()
  const onSubmit = async () : Promise<void> => {
    try {
      const isFilled = Object.values(recordData).every(data => data != "" || data.length > 0)
      if(!isFilled) {
        return toast('All fields are required!', {type:'warning'})
      }
      dispatch(toggleLoading(true))
      const result = await createRecord(recordData);
      setOpenAnimalRecordModal(false)
      return toast('Pet Created!', {type:'success'})
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(toggleLoading(false))
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecordData(prev => {
      if(e.target.name == 'imageUrl' && e.target.files) {
        return {...prev, imageUrl : e.target.files[0]}
      } 
        return {...prev, [e.target.name] : e.target.name == "age"  ? e.target.valueAsNumber : e.target.value }
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRecordData(prev => {
        return {...prev, [e.target.name] : e.target.name == "condition"  ? Number(e.target.value) : e.target.value }
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRecordData(prev => {
        return {...prev, [e.target.name] : e.target.value }
    });
  };

  const optionGender = [
    { key: "Gender", value: "" },
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];

  const optioStatus = [
    { key: "Status", value: "" },
    { key: "Adopted", value: "adopted" },
    { key: "Ready", value: "ready" },
    { key: "Pending", value: "pending" },
  ];
  return {
    onSubmit,
    handleInputChange,
    handleSelectChange,
    handleTextAreaChange
  };
}

export default Logic;
