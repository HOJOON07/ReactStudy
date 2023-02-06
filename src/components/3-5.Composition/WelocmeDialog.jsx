import React from "react";
import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

export default function WelocmeDialog() {
  // return (
  //   <div>
  //     <Dialog>
  //       <h1>Welocome</h1>
  //       <h5>Thank you!</h5>
  //     </Dialog>
  //   </div>
  // );
  return <CustomDialog title="Welcome" description="Thank you" />;
}
