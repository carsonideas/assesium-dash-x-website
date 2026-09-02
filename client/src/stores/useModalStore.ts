// @ts-nocheck
import { create } from 'zustand';

interface ModalState {
  activeModals: Record<string, boolean>;
  modalData: Record<string, any>;
  openModal: (modalName: string, data?: any) => void;
  closeModal: (modalName: string) => void;
}

const defaultModalData = {
  appearance: { settings: {} },
  avatar: { currentAvatar: '' },
  export: { options: {} },
  generateReport: { student: null },
  import: { type: 'students' },
  institution: { data: null },
  paymentMethod: { existingMethods: [], mode: 'add' },
  preferences: { settings: {} },
  security: { settings: {} },
  statsPreview: { stats: {} },
  student: { data: null },
  subscription: { selectedPlan: null, currentPlan: null },
  teacher: { data: null },
  userProfile: { data: null },
  viewDetails: { title: 'Details', data: {}, type: 'student', onEdit: null, onDelete: null, onExport: null },
  examDetails: { data: {} }
};

export const useModalStore = create<ModalState>((set) => ({
  activeModals: {},
  modalData: defaultModalData,
  openModal: (modalName, data) => set((state) => ({
    activeModals: { ...state.activeModals, [modalName]: true },
    modalData: { 
      ...state.modalData, 
      [modalName]: { 
        ...defaultModalData[modalName as keyof typeof defaultModalData], 
        ...data 
      } 
    }
  })),
  closeModal: (modalName) => set((state) => ({
    activeModals: {
      ...state.activeModals,
      [modalName]: false,
    },
    // Keep a safe default data object for every modal after closing it.
    // ModalProvider renders all modal components on every state update.
    modalData: {
      ...state.modalData,
      [modalName]: defaultModalData[modalName as keyof typeof defaultModalData] || {},
    },
  })),
}));