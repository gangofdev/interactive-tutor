import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import CodeContext from "../contexts/CodeContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Description() {
  return (
    <div className="p-4 h-full">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
      laboriosam blanditiis expedita reiciendis mollitia totam commodi
      necessitatibus labore nobis reprehenderit recusandae rem eius laborum
      maxime impedit optio error eos ratione iure corporis assumenda, quis
      animi. Nostrum, quis. Accusantium dignissimos, reprehenderit ducimus
      voluptatum cum fugit suscipit sapiente necessitatibus expedita illum
      quibusdam neque? Quisquam consequatur placeat exercitationem odit,
      laudantium perferendis laboriosam amet fugiat fugit facere rerum
      provident, corrupti magni voluptas blanditiis sed totam, libero deserunt
      accusamus. Beatae perferendis, et aspernatur dolor maiores voluptatem ab
      id esse exercitationem aperiam harum nobis illo fugit velit nesciunt quia
      repellat consectetur inventore quis quibusdam. Voluptatem id provident
      eligendi facilis nisi animi delectus, explicabo dolorum nemo tempore
      veniam qui, odit cum. Sapiente laudantium, corporis provident recusandae
      quaerat impedit laborum excepturi dicta ab ducimus illo amet veniam odit
      animi eveniet consequuntur error possimus esse dolore necessitatibus ullam
      temporibus quis! Exercitationem rem facere consectetur doloremque vero,
      voluptatibus architecto necessitatibus soluta consequuntur iste molestias
      libero aspernatur, harum dolorum! Adipisci dolorum culpa quae sapiente
      suscipit, voluptates delectus assumenda nemo vero? Ab eligendi nihil ex
      iusto nostrum? Saepe, dolor excepturi, sit esse necessitatibus eos
      expedita id vel omnis et hic, cum est blanditiis! Reprehenderit totam
      tempora consequuntur officia delectus dolores quisquam.
    </div>
  );
}
