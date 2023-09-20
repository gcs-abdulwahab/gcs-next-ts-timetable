import React from 'react';

const SelectTeacher = () => {
    const openModal = () => {
        const modalElement = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        if (modalElement) {
            modalElement.showModal();
        }
    };

    return (
        <>
            <button className="btn" onClick={openModal}>Select Teacher</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Teacher List</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Abdul</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Zahid Sharif</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default SelectTeacher;
