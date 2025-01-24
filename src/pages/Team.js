import React from 'react'
import TeamMemberModal from '../components/About/TeamMemberModal'
import TeamMember from '../components/About/TeamMember'
import { useDisclosure } from '../hooks/useDisclosure'

const Team = () => {
    const teammemberModal = useDisclosure()

    return (
        <section>
            <div className='pt-32 pb-40 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>Team</h1>
            </div>
            <div className='relative  w-full max-w-max h-[300px] mx-auto'>
                <img src="/images/teambanner.jpg" alt="servicesbanner" className='relative z-10 w-full h-full object-cover' />
                <span className='inline-flex absolute h-[110%] w-[30%] bg-primaryOrange -top-[5%] -left-[2%] ' ></span>
            </div>
            <p className='mt-24 text-2xl font-medium max-w-max mx-auto text-justify'>
                At Truebond Global Investment Group, we pride ourselves on having a leadership team that combines a diverse range of experiences, expertise, and passion for innovation. Our Board and Management teams work collaboratively to drive the company’s vision forward, to ensure sustainable growth, and to maintain the highest standards of governance and ethical conduct
            </p>

            <div className='flex gap-20 justify-center items-center pt-20 pb-40 flex-wrap max-w-[1300px] mx-auto'>
                {
                    Array.from({ length: 6 }, (_, index) => (
                        <TeamMember teammemberModal={teammemberModal} key={index} />
                    ))
                }
            </div>

            {teammemberModal.isOpen && <TeamMemberModal modal={teammemberModal} />}

        </section>
    )
}

export default Team