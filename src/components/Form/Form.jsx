import { useState } from "react";

import formImage from "../../assets/img/form.png";
import { StyledForm } from "./StyledForm";

import { useSelector, useDispatch } from "react-redux";
import { updateDataCovid } from "../../features/provinces/provincesSlice";

import Alert from "../ui/Alert";
import toast from "react-hot-toast";

const Form = () => {
  const provinces = useSelector((state) => state?.provinces?.value);

  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    province: "",
    status: "",
    jumlah: 0,
  });

  const [isError, setIsError] = useState({
    province: false,
    status: false,
    jumlah: false,
  });

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

  const { province, status, jumlah } = formValue;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const updatedDataCovid = () => {
    dispatch(
      updateDataCovid({
        province: province,
        covidCase: status,
        jumlah: jumlah,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (province === "") {
      setIsError({
        province: true,
      });
    } else if (status === "") {
      setIsError({
        status: true,
      });
    } else if (jumlah === 0) {
      setIsError({
        jumlah: true,
      });
    } else {
      updatedDataCovid();

      toast.success("Success!");

      setFormValue({
        province: "",
        status: "",
        jumlah: 0,
      });
    }
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
              name="province"
              id="provinsi"
              value={province}
              onChange={handleChange}
            >
              <option>Pilih Provinsi</option>
              {provinces?.map((province, index) => (
                <option key={index} value={province?.kota}>
                  {province?.kota}
                </option>
              ))}
            </select>
            {isError.province && (
              <Alert>Data Provinsi tidak boleh kosong</Alert>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={handleChange}
            >
              <option>Pilih Status</option>
              {optionsStatus.map((option, id) => (
                <option key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {isError.status && <Alert>Status tidak boleh kosong</Alert>}
          </div>
          <div className="form__group">
            <label htmlFor="jumlah">Jumlah</label>
            <input
              id="jumlah"
              name="jumlah"
              type="number"
              value={jumlah}
              onChange={handleChange}
            />
            {isError.jumlah && <Alert>Jumlah tidak boleh kosong</Alert>}
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </StyledForm>
  );
};

export default Form;
