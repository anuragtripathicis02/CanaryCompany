
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Plpfilter = () => {
    
      const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
      const [departureDate, setDepartureDate] = useState<Date | null>(null);
    
      const [island, setIsland] = useState("");

  return (
    <div className="filter-side-box">
        <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
            <div className="title-heading">
                <h3>Our Holiday Cottages</h3>
            </div>
        </div>

        <div className="filter-offcanvas">
            <div className="offcanvas-body">
                <div className="bg-white">
                    <h4 className="mb-4">Refine Booking Search</h4>
                    <div className="datepicker-sec d-flex align-items-center flex-wrap flex-column card-box mb-0">
                        <div className="date-box w-100 m-0 mb-4">
                            <h6 className="mb-2">When?</h6>
                            <div className="filter-box mb-2">
                                <DatePicker selected={arrivalDate}  dateFormat="dd/MM/yyyy" onChange={(date: Date | null) => {   setArrivalDate(date);   if (departureDate && date && date >= departureDate) { setDepartureDate(null);   } }} placeholderText="Arrival Date" className="form-control" minDate={new Date()} />
                            </div>
                            <div className="filter-box">
                                <DatePicker selected={departureDate}  dateFormat="dd/MM/yyyy" onChange={(date: Date | null) => setDepartureDate(date)} placeholderText="Departure Date" className="form-control" minDate={arrivalDate || new Date()} disabled={!arrivalDate}/>
                            </div>
                        </div>
                        <div className="date-box w-100 m-0 mb-4">
                            <h6 className="mb-2">Where?</h6>
                            <select className="form-select form-control search-input" value={island} onChange={(e) => setIsland(e.target.value)}>
                                <option value="">What island would you choose?</option>
                                <option>El Hierro</option>
                                <option>Fuerteventura</option>
                                <option>La Palma</option>
                                <option>Lanzarote</option>
                            </select>
                        </div>
                        <div className="date-box w-100 m-0 mb-4">
                            <h6 className="mb-2">How many people?</h6>
                            <Form.Group className="mb-0" controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Guests" />
                            </Form.Group>
                        </div>
                        <div className="date-box w-100 m-0 mb-4">
                            <h6 className="mb-2">Price per night</h6>
                            <ul>
                                <li>
                                    <Form.Check aria-label="option 1" label="€ 0 - € 99" name="group1" id="label-1"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 1" label="€ 100 - € 199" name="group1" id="label-2"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 1" label="€ 200 + " name="group1" id="label-3"/>
                                </li>
                            </ul>
                        </div>
                        <div className="date-box w-100 m-0 mb-4">
                            <h6 className="mb-2">Tags:</h6>
                            <ul>
                                <li>
                                    <Form.Check aria-label="option 2" label="Beachfront" name="group2" id="tag-1"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Private Pool" name="group2" id="tag-2"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Pool" name="group2" id="tag-3"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Family" name="group2" id="tag-4"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Handycapped Friendly" name="group2" id="tag-5"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Pets" name="group2" id="tag-6"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Ocean View" name="group2" id="tag-7"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Private Setting" name="group2" id="tag-8"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Green, Eco-friendly" name="group2" id="tag-9"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Pool Heating" name="group2" id="tag-10"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Sauna" name="group2" id="tag-11"/>
                                </li>
                                <li>
                                    <Form.Check aria-label="option 2" label="Hot Tub" name="group2" id="tag-12"/>
                                </li>
                            </ul>
                        </div>
                        <div className="date-box button-box w-100 m-0 mb-md-2">
                            <Button type="button" className="submit-btn btn-theme w-100">Find me a home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Plpfilter