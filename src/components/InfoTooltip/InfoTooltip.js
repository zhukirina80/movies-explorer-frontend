import './InfoTooltip.css';
import usePopupClose from "../../hooks/usePopupClose";

function InfoTooltip({isOpen, onClose, isSuccess, text}) {

  usePopupClose(isOpen, onClose);

  return (
    <div className={`infoTooltip ${isOpen ? 'infoTooltip_opened' : ''}`}>
      <div className="infoTooltip__info-container">
        <button onMouseDown={onClose} type="reset" className="infoTooltip__button-close" aria-label="Закрыть" />
        <div className={`infoTooltip__icon ${isSuccess ? 'infoTooltip__icon_type_success' : 'infoTooltip__icon_type_error'}`}/>
        <p className="infoTooltip__text">{text}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;