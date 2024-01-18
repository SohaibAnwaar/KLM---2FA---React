import React, { useEffect, useState } from "react";
import { useAddItem, useUpdateItem } from "../../hooks";
import Loader from "../shared/Loader";
import ItemList from "./ItemList";
import { useQueryClient } from "react-query";

export interface AddItemState {
  name: string;
  description: string;
  id?: string;
}

const AddItem: React.FC = () => {
  const [formData, setFormData] = useState<AddItemState>({
    name: "",
    description: "",
  });

  const queryClient = useQueryClient();
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const { mutate, isLoading } = useAddItem(() => {
    setFormData({ name: "", description: "" });
    return queryClient.invalidateQueries(["items"]);
  });
  const updateItem = useUpdateItem(() => {
    setFormData({ name: "", description: "" });
    setIsUpdating(false);
    return queryClient.invalidateQueries(["items"]);
  });

  useEffect(() => {
    console.log("isFormDirty", updateItem);
  }, [updateItem]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    setIsFormDirty(true);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    !isUpdating
      ? mutate(formData)
      : updateItem.mutate({
          itemId: formData.id || "",
          formData,
        });
  };

  return (
    <div className="flex flex-col">
      <section className="flex-1 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new item
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  item Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Type item name"
                  required
                  disabled={isLoading || updateItem?.isLoading}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  value={formData.description}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Your description here"
                  disabled={isLoading || updateItem?.isLoading}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800"
              disabled={isLoading || !isFormDirty || updateItem?.isLoading}
            >
              <span className="flex justify-center items-center gap-2">
                {isUpdating ? "Update" : "Add Item"}
                {isLoading || (updateItem?.isLoading && <Loader />)}
              </span>
            </button>
          </form>
        </div>
      </section>
      <ItemList setFormData={setFormData} setIsUpdating={setIsUpdating} />
    </div>
  );
};

export default AddItem;
