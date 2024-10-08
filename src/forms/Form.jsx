import { useState } from "react";
import FormCard1 from "./FormCard1";
import FormCard2 from "./FormCard2";
import FormCard3 from "./FormCard3";
import FormCard4 from "./FormCard4";

function Form(props) {
  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);

  if (!form1) {
    return (
      <FormCard1
        form1={form1}
        form2={form2}
        form3={form3}
        form4={props.data.form4}
        setForm1={setForm1}
        setForm2={setForm2}
        setForm3={setForm3}
        setForm4={props.data.setForm4}
        data={props}
      />
    );
  }

  if (!form2) {
    return (
      <FormCard2
        form1={form1}
        form2={form2}
        form3={form3}
        form4={props.data.form4}
        setForm1={setForm1}
        setForm2={setForm2}
        setForm3={setForm3}
        setForm4={props.data.setForm4}
        data={props}
      />
    );
  }

  if (!form3) {
    return (
      <FormCard3
        form1={form1}
        form2={form2}
        form3={form3}
        form4={props.data.form4}
        setForm1={setForm1}
        setForm2={setForm2}
        setForm3={setForm3}
        setForm4={props.data.setForm4}
        data={props}
      />
    );
  }

  if (!props.data.form4) {
    return (
      <FormCard4
        form1={form1}
        form2={form2}
        form3={form3}
        form4={props.data.form4}
        setForm1={setForm1}
        setForm2={setForm2}
        setForm3={setForm3}
        setForm4={props.data.setForm4}
        data={props}
      />
    );
  }
}

export default Form;
