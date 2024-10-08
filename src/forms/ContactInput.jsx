import { useState } from "react";

function ContactInput(props) {
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");

  const formatE164E = (phone) => {
    phone = phone.replace(/\s/g, ""); // Remove any spaces first

    const phoneSplit = phone.match(/.{1,2}/g);
    let phoneBuffer = "+33 " + phoneSplit[0][1];
    phoneSplit.shift();
    for (const i of phoneSplit) {
      phoneBuffer = phoneBuffer + " " + i;
    }
    return phoneBuffer;
  };

  const setData = (event) => {
    if (props.postCode && event.target.validity.valid) {
      props.setData(event.target.value);
      if (event.target.value.length != 5) {
        props.dataValid(false);
      } else {
        props.dataValid(true);
      }
    } else if (
      props.tel &&
      event.target.value.replace(/\s/g, "").length == 10
    ) {
      props.setData(formatE164E(event.target.value));
      props.dataValid(true);
    } else if (props.tel && event.target.value.replace(/\s/g, "").length < 10) {
      props.dataValid(false);
    } else if (!props.postCode && !props.tel) {
      props.setData(event.target.value);
      props.dataValid(true);
    }
  };

  const formatPostCode = (event) => {
    const postCodeBuffer = event.target.validity.valid
      ? event.target.value
      : postCode;
    setPostCode(postCodeBuffer);
  };

  const formatFormPhone = (event) => {
    let pattern = new RegExp("^(0?|0[67]\\d{0,8})$");
    let phoneBuffer = event.target.value.replace(/\s/g, ""); // Remove any spaces first
    phoneBuffer = pattern.test(phoneBuffer)
      ? (phoneBuffer = phoneBuffer.match(/.{1,2}/g)?.join(" ") || "")
      : (phoneBuffer = phone);

    setPhone(phoneBuffer);
  };

  if (props.postCode) {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{0,5}"
            onInput={formatPostCode.bind(this)}
            onChange={setData.bind(this)}
            value={postCode}
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[150px]
            "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  } else if (props.tel) {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="tel"
            inputMode="numeric"
            onInput={formatFormPhone.bind(this)}
            onChange={setData.bind(this)}
            value={phone}
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[250px]
          "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="text"
            onChange={setData.bind(this)}
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[250px]
          "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  }
}

export default ContactInput;
