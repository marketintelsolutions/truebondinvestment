import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { style } from "./config";

const TeamMemberModal = ({ modal }) => {
    return (
        <Modal
            open={modal.isOpen}
            onClose={modal.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="backdrop-blur-[3px]"
        >
            <Box
                sx={style}
                className="bg-white relative  max-w-[870px] w-full  min-h-[500px] overflow-hidden rounded-[15px] flex gap-16"
            >
                <span onClick={modal.close} className="absolute cursor-pointer top-5 right-5"><IoClose size={25} /></span>
                <div className="w-full max-w-[40%]"><img src="/images/person.jpg" alt="person" className="h-full w-full object-cover" /></div>
                <div className="w-full max-w-[50%] py-20">
                    <h2 className="text-[30px]">Christina Lucero</h2>
                    <p className="text-primaryBlue mt-4 font-light">Executive Property Manager</p>

                    <h3 className="font-bold underline mt-8 mb-6">About:</h3>
                    <p className="text-lg font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero perferendis debitis impedit corrupti, sed minus dolores deleniti eum maiores doloremque accusantium asperiores sit voluptate saepe pariatur mollitia tempore non provident laudantium dicta aspernatur atque eaque. Ratione corrupti, saepe aspernatur vitae distinctio corporis nostrum maiores reprehenderit minima exercitationem, facilis dolorem!</p>
                </div>
            </Box>
        </Modal>
    );
};

export default TeamMemberModal;
