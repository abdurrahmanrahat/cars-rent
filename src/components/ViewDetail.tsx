"use client";

import { Button } from "@nextui-org/react";

const ViewDetail = ({ id }: { id: number }) => {
  const handleDetail = () => {
    console.log(id);
  };

  return (
    <Button onClick={handleDetail} fullWidth variant="faded">
      View Detail
    </Button>
  );
};

export default ViewDetail;
