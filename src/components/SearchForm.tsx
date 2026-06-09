import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  const [island, setIsland] = useState("");

  return (
    <div className="datepicker-sec d-flex align-items-center flex-wrap card-box mb-4">
      <div className="date-box">
        <DatePicker selected={arrivalDate}  dateFormat="dd/MM/yyyy" onChange={(date: Date | null) => {   setArrivalDate(date);   if (departureDate && date && date >= departureDate) { setDepartureDate(null);   } }} placeholderText="Arrival Date" className="form-control" minDate={new Date()} />
      </div>
      <div className="date-box">
        <DatePicker selected={departureDate}  dateFormat="dd/MM/yyyy" onChange={(date: Date | null) => setDepartureDate(date)} placeholderText="Departure Date" className="form-control" minDate={arrivalDate || new Date()} disabled={!arrivalDate}/>
      </div>
      <div className="date-box">
        <select className="form-select form-control search-input" value={island} onChange={(e) => setIsland(e.target.value)}>
            <option value="">What island would you choose?</option>
            <option>El Hierro</option>
            <option>Fuerteventura</option>
            <option>La Palma</option>
            <option>Lanzarote</option>
          </select>
      </div>
      <div className="date-box">
        <Form.Group className="mb-0" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Guests" />
        </Form.Group>
      </div>
      <div className="date-box button-box">
        <Button type="button" className="submit-btn btn-theme w-100">Find me a home</Button>
      </div>
    </div>
  );
};

export default SearchForm;
