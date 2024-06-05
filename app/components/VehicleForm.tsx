'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

interface FormData {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  email: string;
  vehiculo: string;
}

const VehicleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    email: '',
    vehiculo: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const message = `¡Hola! Quiero un Plan de Ahorro. \nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nVehículo: ${formData.vehiculo}`;
    const phoneNumber = '5491123996826'; // Reemplaza con tu número de WhatsApp en formato internacional, sin el '+'.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre la ventana de WhatsApp inmediatamente
    window.open(whatsappUrl, '_blank');

    // Enviar email en segundo plano
    const emailParams: Record<string, string> = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      email: formData.email,
      vehiculo: formData.vehiculo,
    };

    try {
      await emailjs.send('service_mgzf0eg', 'template_0xo6dkj', emailParams, '7MY4_LsMimhVVrhtOweGi');
      alert('Formulario enviado con éxito por correo.');

      // Redirigir a la página de confirmación
      router.push('/vehicleformconfirmation');

    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Error al enviar el formulario por correo: ' + error.message);
      } else {
        alert('Error desconocido al enviar el formulario por correo.');
      }
    }
  };

  return (
    <div className='bg-slate-50 mt-16 pt-32 md:pt-20 mb-2' id='planesdeahorroform'>
      <h2 className='m-2 text-center text-sky-500 font-bold text-[25px] lg:text-[40px]'>SUSCRIBITE A TU PLAN DE AHORRO</h2>
      <h3 className='text-center font-semibold m-2'>
        Envianos un Whatsapp completando el formulario con tus datos y el vehículo que estás buscando.<br/>
        Se te asignará un vendedor para que te contacte.
      </h3>
      <form className="max-w-[900px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="mb-4 w-full mx-2">
          <input
            type="text"
            placeholder="Nombre Completo*"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <input
            type="text"
            placeholder="11-2233-4455*"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <select
            name="vehiculo"
            value={formData.vehiculo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          >
            <option value="">Seleccionar Plan Chevrolet</option>
            <option value="Spin">Spin</option>
            <option value="TrackerLTAT">Tracker LTAT</option>
            <option value="TrackerMTAT">Tracker MTAT</option>
            <option value="S10">S10</option>
            <option value="Onix">Onix</option>
          </select>
        </div>
        <div className="mb-4 w-full mx-2 md:col-span-2 text-center self-baseline">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="autorizacion"
              onChange={handleChange}
              className="form-checkbox"
              required
            />
            <span className="ml-2 text-gray-700 max-w-[450px] self-baseline">Autorizo a TU 0KM EN CUOTAS a almacenar mis datos y enviarme información sobre los Planes de Ahorro.*</span>
          </label>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-sky-500 text-white p-2 rounded mt-4 w-96"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>


  );
};

export default VehicleForm;
