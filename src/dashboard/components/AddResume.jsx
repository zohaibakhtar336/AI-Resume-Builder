import { PlusSquare, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const onCreate = () => {
    if (!resumeTitle.trim()) return;

    setLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data)
      .then((resp) => {
        console.log("Resume Created:", resp);
        setLoading(false);
        setOpenDialog(false);
      })
      .catch((error) => {
        console.error("Error Creating Resume:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* ✅ Dialog Trigger (Click to Open) */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <div
            className="p-14 py-24 border items-center flex justify-center bg-secondary 
              rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md 
              cursor-pointer border-dashed"
            onClick={() => {
              console.log("Opening Dialog...");
              setOpenDialog(true);
            }}>
            <PlusSquare size={50} className="text-gray-500" />
          </div>
        </DialogTrigger>

        {/* ✅ Dialog Content */}
        {openDialog && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Resume</DialogTitle>
              <DialogDescription>
                <p>Provide a title for your resume</p>
                <Input
                  className="my-2"
                  placeholder="Ex. Full Stack Resume"
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                />
              </DialogDescription>
              <div className="flex justify-end gap-5">
                <Button onClick={() => setOpenDialog(false)} variant="ghost">
                  Cancel
                </Button>
                <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                  {loading ? <Loader2 className="animate-spin" /> : "Create"}
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

export default AddResume;
