import { useNavigate, useParams } from 'react-router-dom';
import TeacherForm, { type TeacherFormData } from '../components/forms/TeacherForm';

const defaultTeacher: TeacherFormData = {
  name: '',
  email: '',
  phone: '',
  department: '',
  subjects: [],
  institution: '',
  qualification: '',
  joinDate: new Date().toISOString().split('T')[0],
};

export default function TeacherEdit() {
  const navigate = useNavigate();
  const { teacherId } = useParams<{ teacherId: string }>();

  const handleClose = () => navigate(teacherId ? `/teachers/${teacherId}` : '/teachers');

  const handleSave = (_teacherData: TeacherFormData) => {
    handleClose();
  };

  return (
    <TeacherForm
      isOpen
      onClose={handleClose}
      onSave={handleSave}
      initialData={{ ...defaultTeacher, id: teacherId }}
      title="Edit Teacher Profile"
    />
  );
}
