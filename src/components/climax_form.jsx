import React from 'react'

const Climax_form = props => {
    return (
        <div className='container-forms'>
            <form className="row g-3 needs-validation" onSubmit={props.getClimax} >
                <div className="col-md-4">
                    <label className="form-label">Introduce Tu Ciudad:</label>
                    <input placeholder='Ciudad' name='ciudad' type="text" className="form-control" id="validationCustom01" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Introduce Tu Pais </label>
                    <input placeholder='Pais' name='pais' type="text" className="form-control" id="validationCustom02" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Estado:</label>
                    <input placeholder='Estado' name='estado' type="text" className="form-control" id="validationCustom02" required />
                </div>
                <button className="btn btn-success">Obtener Clima</button>
            </form>
        </div>
    )
}

export default Climax_form
