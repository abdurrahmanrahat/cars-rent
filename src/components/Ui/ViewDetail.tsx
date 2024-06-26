"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const ViewDetail = ({ id }: { id: number }) => {
  return (
    <Button as={Link} href={`/cars/${id}`} fullWidth variant="faded">
      View Detail
    </Button>
  );
};

export default ViewDetail;
