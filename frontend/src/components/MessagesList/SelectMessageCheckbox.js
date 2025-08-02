import React, { useContext } from "react";
import toastError  from "../../errors/toastError";
import { Checkbox } from "@mui/material";
import { ForwardMessageContext } from "../../context/ForwarMessage/ForwardMessageContext";

const SelectMessageCheckbox = ({ message }) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const { showSelectMessageCheckbox,
      setSelectedMessages,
      selectedMessages,
   } = useContext(ForwardMessageContext);

    const handleSelectMessage = (e, message) => {
        const list = selectedMessages;
        if (e.target.checked) {
          setIsChecked(true);
          list.push(message);
        } else {
          const index = list.findIndex((m) => m.id === message.id);
          list.splice(index, 1);
          setIsChecked(true);
        }
        setSelectedMessages(list);
      }

    if (showSelectMessageCheckbox) {
        return <Checkbox color="primary" checked={isChecked} onChange={(e) => handleSelectMessage(e, message)}  />;
    } else {
        return null;
    }
}

export default SelectMessageCheckbox;