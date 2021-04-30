import React from "react";
import Modal from "react-modal";
import "./ChartSettings.css";
import { useDispatch, useSelector } from "react-redux";
import { switchCheckbox } from "../../01_actions";
import Switch from "rc-switch";
import Chartoptions from "../ChartSettingsCheckbox/ChartSettingsCheckbox";
import SortOptions from "../ChartSettingsRadio/ChartSettingsRadio";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ChartSettings() {
  const filterState = useSelector((state) => state.chartFilter);
  const dispatch = useDispatch();

  const headerCheckbox = filterState.map(({ studentName, checked, id }) => {
    return (
      <div className="checkbox-item">
        <Switch
          className="react-switch"
          onChange={() => dispatch(switchCheckbox(id))}
          key={id}
          checked={checked}
        />
        <span className="switch-text">{studentName}</span>
      </div>
    );
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-secondary navbar-center" onClick={openModal}>
        Settings <i className="fas fa-sliders-h"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Settings Modal"
      >
        <h1 className="Modal__Header">Chart settings</h1>

        <div className="settings">
          <div className="setting__container">
            <h2>Students</h2>
            <div className="settings__names">{headerCheckbox}</div>
          </div>

          <div className="setting__container">
            <h2>Sort by</h2>
            <div className="settings__sort">
              <SortOptions />
            </div>
          </div>

          <div className="setting__container">
            <h2>Display</h2>
            <div className="settings__chart">
              <Chartoptions />
            </div>
          </div>
        </div>

        <span className="settingsTip">
          Reminder: You can switch between charts in the top right corner!
        </span>
        <button
          className="Modal__Close btn btn-secondary BackBtn"
          onClick={closeModal}
        >
          Back <i className="fas fa-arrow-right"></i>
        </button>
      </Modal>
    </div>
  );
}
