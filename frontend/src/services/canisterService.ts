import { backend as actor } from '../ic'; // Uses the actor directly from central entrypoint

export interface Patient {
  id?: string;
  name: string;
  history: string;
  doctor: string;
  appointment: string;
  inClinic: boolean;
}

// ---- Canister API Functions ---- //

export const addPatient = async (patient: Omit<Patient, 'id'>): Promise<void> => {
  try {
    const payload = {
      patient_name: patient.name,
      patient_history: patient.history,
      doctor_name: patient.doctor,
      next_appointment: BigInt(new Date(patient.appointment).getTime()),
      in_clinic: patient.inClinic,
    };

    await actor.add_patient(payload);
  } catch (error) {
    console.error('❌ Error adding patient:', error);
    throw new Error('Failed to add patient to the blockchain');
  }
};

export const loadPatients = async (): Promise<Patient[]> => {
  try {
    const rawPatients = await actor.get_all_patients() as Array<any>;

    return rawPatients.map((p: any) => ({
      id: p.id?.toString?.() || '',
      name: p.patient_name,
      history: p.patient_history,
      doctor: p.doctor_name,
      appointment: new Date(Number(p.next_appointment)).toISOString(),
      inClinic: p.in_clinic,
    }));
  } catch (error) {
    console.error('❌ Error loading patients:', error);
    throw new Error('Failed to load patients from the blockchain');
  }
};
