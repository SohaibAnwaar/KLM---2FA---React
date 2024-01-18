import React from "react";
import { useDeleteItem, useGetAllItems } from "../../hooks";
import Loader from "../shared/Loader";
import { AddItemState } from ".";
import { useQueryClient } from "react-query";

const ItemList = ({ setFormData, setIsUpdating }: IItemListProps) => {
  const { data: items, isLoading } = useGetAllItems();
  const queryClient = useQueryClient();

  const deleteItem = useDeleteItem(() => {
    return queryClient.invalidateQueries(["items"]);
  });

  const handleDelete = (itemId: string) => {
    deleteItem.mutate(itemId);
  };

  const handleUpdate = (item: any) => {
    setFormData(item);
    setIsUpdating(true);
  };

  return (
    <>
      {!isLoading || !deleteItem?.isLoading ? (
        items && items?.data?.length > 0 ? (
          <table className="shadow-md sm:rounded-lg flex-1 w-full text-sm text-left  mx-auto max-w-4xl rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items?.data?.map((item) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="flex gap-2 px-6 py-4 cursor-pointer">
                    <div
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleUpdate(item)}
                    >
                      Edit
                    </div>
                    <div
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleDelete(item.id || "")}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-4 text-gray-500 dark:text-gray-400">
            No results found.
          </div>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

interface IItemListProps {
  setFormData: React.Dispatch<React.SetStateAction<AddItemState>>;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ItemList;
