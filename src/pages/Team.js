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