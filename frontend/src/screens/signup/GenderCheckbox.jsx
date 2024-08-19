

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex mt-2 ml-7">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer${selectedGender==='male'? 'selected' : ''}`}>
                <span className="label-text text-gray-500">Male</span>
                <input type="checkbox" className="checkbox border-blue-300"
                checked={selectedGender==='male'}
                onChange={()=>onCheckboxChange('male')} />
            </label>
        </div>
        <div>
        <label className={`label gap-2 cursor-pointer ${selectedGender==='female'? 'selected' : ''}`}>
                <span className="label-text text-gray-500">Female</span>
                <input type="checkbox" className="checkbox border-blue-300"
                checked={selectedGender==='female'} 
                onChange={()=>onCheckboxChange('female')}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox