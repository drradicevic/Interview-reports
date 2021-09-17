import "./Modal.css"

const Modal = ({ modalReport, showModal, cancelModal}) => {
    return (
        showModal ?
        <div className="modal-container overflow-auto h-50">
            <div className="modal-title-header d-flex justify-content-between px-3 pt-2 border-bottom">
                <h5 className="display-5">{modalReport[0].candidateName}</h5>
                <span className="cancel-modal-button"><i onClick={cancelModal} className="far fa-times-circle fs-2 mt-3"></i></span>
            </div>
            <div className="modal-container-body d-flex flex-wrap flex-lg-nowrap justify-content-between px-3 mt-4">
                <div className="col-12 col-lg-4">
                    <p><span>Company</span> {modalReport[0].companyName}</p>
                    <p><span>Interview date</span> {modalReport[0].interviewDate}</p>
                    <p><span>Phase</span> {modalReport[0].phase}</p>
                    <p><span>Status</span> {modalReport[0].status}</p>
                </div>
                <div className="col-12 col-lg-7">
                    <p><span>Notes</span>{modalReport[0].note}</p>
                </div>
            </div>
        </div>
        : null
    )
}

export default Modal;