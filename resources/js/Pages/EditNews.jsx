import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };

        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-neutral-400">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card  w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="card-body">
                    <div className="p-2 text-2xl">Edit Berita</div>
                    <input
                        type="text"
                        className="m-2 input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        className="m-2 input input-bordered w-full "
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        className="m-2 input input-bordered w-full "
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
