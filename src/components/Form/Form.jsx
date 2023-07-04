import { useState } from "react";
import Alert from "../Alert/Alert";
import formImage from "../../assets/img/form.png";
import { StyledForm } from "./StyledForm";

import { useSelector, useDispatch } from "react-redux";
import { updateDataCovid } from "../../features/provinces/provincesSlice";

import toast from "react-hot-toast";

const Form = () => {
  const provinces = useSelector((state) => state?.provinces?.value);

  const dispatch = useDispatch();

  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState(0);

  const [isErrorProvince, setIsErrorProvince] = useState(false);
  const [isErrorStatus, setIsErrorStatus] = useState(false);
  const [isErrorJumlah, setIsErrorJumlah] = useState(false);

  const optionsStatus = [
    {
      label: "Sembuh",
      value: "sembuh",
    },
    {
      label: "Meninggal",
      value: "meninggal",
    },
    {
      label: "Dirawat",
      value: "dirawat",
    },
  ];

  const handleProvince = (e) => {
    const { value } = e.target;
    setProvince(value);
  };

  const handleStatus = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  const handleJumlah = (e) => {
    const { value } = e.target;
    setJumlah(value);
  };

  const updatedDataCovid = () => {
    if (status === "sembuh") {
      dispatch(
        updateDataCovid({
          province: province,
          covidCase: status,
          jumlah: jumlah,
        })
      );
    } else if (status === "meninggal") {
      dispatch(
        updateDataCovid({
          province: province,
          covidCase: status,
          jumlah: jumlah,
        })
      );
    } else {
      dispatch(
        updateDataCovid({
          province: province,
          covidCase: status,
          jumlah: jumlah,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (province === "") {
      setIsErrorProvince(true);
    } else if (status === "") {
      setIsErrorStatus(true);
    } else if (jumlah === 0) {
      setIsErrorJumlah(true);
    } else {
      updatedDataCovid();
    }

    toast.success("Success add new data covid");

    e.target.reset();
  };

  return (
    <StyledForm>
      <div className="form__left">
        <img src={formImage} alt="form-image" className="form__image" />
      </div>
      <div className="form__right">
        <div>
          <h2>Form Covid</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="provinsi">Provinsi</label>
            <select
              name="provinsi"
              id="provinsi"
              value={province}
              onChange={handleProvince}
            >
              <option>Pilih Provinsi</option>
              {provinces?.map((province, index) => (
                <option key={index} value={province?.kota}>
                  {province?.kota}
                </option>
              ))}
            </select>
            {isErrorProvince && <Alert>Data Provinsi tidak boleh kosong</Alert>}
          </div>
          <div className="form__group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={handleStatus}
            >
              <option>Pilih Status</option>
              {optionsStatus.map((option, id) => (
                <option key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {isErrorStatus && <Alert>Status tidak boleh kosong</Alert>}
          </div>
          <div className="form__group">
            <label htmlFor="jumlah">Jumlah</label>
            <input
              id="jumlah"
              name="jumlah"
              type="number"
              value={jumlah}
              onChange={handleJumlah}
            />
            {isErrorJumlah && <Alert>Jumlah tidak boleh kosong</Alert>}
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </StyledForm>
  );
};

export default Form;
