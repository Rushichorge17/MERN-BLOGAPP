import { useState } from "react";
import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [selectedCategory, setSelectedCategory] = useState("uncategorized");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    "uncategorized",
    "javascript",
    "reactjs",
    "nextjs",
    "html",
    "css",
    "nodejs",
  ]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === "create_new") {
      setNewCategory("");
    }
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleCreateCategory = () => {
    if (newCategory.trim() !== "" && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setSelectedCategory(newCategory);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post📝</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="uncategorized">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value="create_new">Create New Category</option>
          </Select>
        </div>
        {selectedCategory === "create_new" && (
          <div className="flex gap-4 items-center">
            <TextInput
              type="text"
              placeholder="New Category Name"
              value={newCategory}
              onChange={handleNewCategoryChange}
            />
            <button
              type="button"
              onClick={handleCreateCategory}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </div>
        )}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            // onClick={handleUpdloadImage}
            // disabled={imageUploadProgress}
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />

        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
