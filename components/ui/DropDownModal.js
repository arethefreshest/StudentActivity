import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

const DropDownModal = ({ visible, onClose, onSelectOption, onLogOut }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => { onSelectOption('Feed'); onClose(); }} style={styles.modalOption}>
                        <Text style={styles.modalText}>Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onSelectOption('ProfilInnstillinger'); onClose(); }} style={styles.modalOption}>
                        <Text style={styles.modalText}>Profilinnstillinger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onSelectOption('Venner'); onClose(); }} style={styles.modalOption}>
                        <Text style={styles.modalText}>Venner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onLogOut(); onClose(); }} style={styles.modalOption}>
                        <Text style={styles.modalText}>Logg ut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
                        <Text style={styles.modalText}>Lukk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default DropDownModal;