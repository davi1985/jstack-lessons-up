import { ContactForm } from "../../components/ContactForm";
import { Loader } from "../../components/Loader";
import { PageHeader } from "../../components/PageHeader";

import { useEditContact } from "./useEditContact";

export const EditContact = () => {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? "Carregando..." : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};
