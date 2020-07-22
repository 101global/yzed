import React, { useContext, useEffect, useState } from 'react';

import BrandModelControls from './BrandModelControls';
import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';

const BrandPageLayout = ({ model }) => {
  console.log(model);
  return (
    <>
      <NavigationBar isLandingMenu={true} />
      <div className='main-page-container flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen px-4 lg:px-dsk'>
        <div>
          <div className='model-viewer-container fixed'>
            <BrandModelControls model={model} />
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ullam officia
            placeat expedita aliquam alias magni eveniet odio porro voluptatum? Voluptate
            perferendis voluptatum eaque sed quisquam libero eligendi, cum harum quis dolor, autem
            ipsam temporibus asperiores et neque magnam velit magni veritatis saepe ex eveniet est
            quidem. Atque in voluptatibus debitis vitae perspiciatis architecto, laudantium quidem
            assumenda, labore sequi alias autem error. Iste minima aut voluptatem accusantium
            dolorum excepturi at dolorem tempora fugit alias molestias aliquam error maxime commodi
            corporis molestiae fuga dignissimos sapiente minus non, velit vel quaerat doloremque?
            Iusto assumenda cum iste ullam ipsa ex placeat aperiam laudantium ipsum consectetur
            atque eum beatae ratione blanditiis est, reiciendis omnis perferendis numquam quam hic,
            veritatis totam reprehenderit rerum! Ex possimus nihil quos provident aliquid deserunt
            quod nostrum voluptatum id iure reprehenderit ea dolore quisquam quas, sapiente expedita
            nobis dignissimos perspiciatis ipsa. Blanditiis molestias dignissimos laudantium ratione
            facere in debitis laboriosam placeat voluptatibus animi? Rem minus suscipit esse quas
            quis excepturi provident qui reiciendis, harum maiores ducimus sint ipsam
            exercitationem, vero recusandae quia laudantium? Hic sed dolorem earum delectus nulla
            aliquid odio beatae voluptatum maiores et optio nam eos mollitia perferendis eligendi
            magni, asperiores numquam dolore amet voluptas facere ipsum sint vitae quas. Eos ea nisi
            praesentium nam consequatur. Enim rerum repellendus aspernatur molestiae perferendis
            officia iure excepturi minus provident officiis repudiandae, eius nam nisi illum?
            Perferendis ducimus fugit accusamus quasi, nobis nostrum quisquam sint illo molestias
            assumenda tempore vero quaerat repudiandae ad veniam, aspernatur minima dolores? Alias
            atque reprehenderit velit totam cum? Quia similique ipsa aperiam et itaque perspiciatis?
            Sapiente eos saepe odit voluptatum ea natus earum eaque illum tempora repellat.
            Molestiae incidunt labore dolorem iure, autem culpa perferendis voluptas unde magnam
            rerum, quos, animi reprehenderit dolores fugiat! Facere reprehenderit necessitatibus
            ducimus, officia tenetur explicabo. Animi excepturi, quo, voluptatum reprehenderit
            omnis, iusto debitis reiciendis eligendi doloribus nemo nesciunt architecto cumque amet.
            Sed asperiores omnis, voluptas molestias, autem, iusto saepe ab consequuntur iure minus
            dolores tempora reprehenderit numquam! Explicabo, ut laudantium? Aliquam nisi magni
            omnis! Modi recusandae fuga explicabo laboriosam suscipit? Labore ea odit quas veniam
            error deleniti officiis, distinctio nostrum soluta commodi, quo iste recusandae, a
            adipisci tenetur veritatis vel voluptate cumque id aliquid ratione fugit ad! Totam, nemo
            cum. Non explicabo temporibus harum maxime unde qui libero voluptates distinctio nostrum
            est ratione dolore alias totam veniam blanditiis laboriosam, voluptatibus eveniet ad
            porro atque dolorem. Saepe aperiam expedita nemo error at fuga nostrum facilis
            voluptatibus quasi suscipit repellat quisquam aliquam molestiae vero eveniet adipisci
            porro natus numquam, exercitationem laudantium earum sequi inventore. Perspiciatis,
            quasi modi sint quis porro similique, eligendi eum numquam, cum architecto accusantium
            tempora velit fugiat eaque sapiente. Voluptatem illo odit, tempora dicta ea error quis
            earum vero ad harum alias recusandae delectus neque accusamus atque iste distinctio
            sequi ex? Repellendus enim nam nisi maiores quibusdam tenetur aliquam consequatur. Modi
            obcaecati minima fugiat rerum praesentium qui dolor commodi odio nam nulla adipisci,
            labore id vel distinctio facere, repudiandae cumque ab iusto. Dolorum dolore numquam
            facere magnam asperiores tenetur ea non laboriosam cum aut deleniti at modi laborum
            aspernatur itaque minus, voluptates cumque, sapiente nobis eveniet? Qui officia hic
            fugit accusantium quas numquam labore ut nihil sint. Consequatur voluptatibus corporis
            non pariatur dolore iusto quo voluptas distinctio, libero minus, alias quibusdam
            perspiciatis obcaecati accusamus ipsa a laboriosam architecto rem esse, vero explicabo
            vel. Ullam sequi dolore, cum quia minima culpa est ea. Voluptates rerum nesciunt
            quibusdam porro eaque odit. Distinctio iure voluptate earum accusamus doloribus eius
            fuga nulla voluptates? Harum suscipit dolorum perspiciatis aliquid, accusamus,
            consequuntur tenetur cum consequatur voluptatem quam deserunt eos omnis ipsa aliquam
            mollitia eius adipisci enim maxime repellendus. Aliquam molestiae ullam libero
            distinctio blanditiis accusamus necessitatibus voluptate itaque adipisci nemo excepturi,
            perferendis earum quisquam veniam sunt quae numquam ab saepe aspernatur nesciunt
            possimus! Facilis praesentium saepe veniam dignissimos autem, cumque magnam nihil neque
            nesciunt fuga beatae non minima quos a sed in! Aperiam corrupti nihil accusantium
            perspiciatis. Dolorum neque labore accusamus facere delectus sunt nemo excepturi
            voluptate illum cumque incidunt ullam deserunt maiores, quo ut fuga nesciunt inventore
            quis impedit repellat similique. Doloribus debitis asperiores illo totam porro aliquid
            perferendis cupiditate odio vitae dolore sint ea minima facere aut delectus quasi,
            facilis culpa voluptas similique. Delectus impedit neque similique laborum soluta, animi
            saepe exercitationem recusandae tempore temporibus, dignissimos, aliquid sint eos
            veritatis eveniet ut necessitatibus cumque in placeat adipisci architecto reprehenderit
            totam! Odit deleniti sed, praesentium, blanditiis non consequuntur iste a quae
            temporibus nostrum quibusdam provident porro rem totam qui incidunt, officiis soluta
            molestias harum aspernatur commodi vel! Praesentium ipsum magni laudantium, nobis
            similique nam voluptates! Corrupti in quis, sed veritatis adipisci perspiciatis possimus
            dolores eum ad nostrum voluptate exercitationem aliquam laborum inventore ea! Minus ad
            distinctio ducimus laudantium recusandae, nesciunt qui, vel quibusdam eos reiciendis
            doloremque consequuntur asperiores explicabo quia totam voluptas obcaecati quos?
            Sapiente, ad. Rem similique asperiores ut architecto, perspiciatis vero odit aspernatur
            eaque sint veritatis sunt neque, consectetur commodi id, dicta modi soluta fugiat et
            ullam. Sapiente praesentium obcaecati quae tempora accusantium repellat omnis ipsam
            provident saepe veritatis laborum repellendus perspiciatis esse quibusdam molestias
            possimus repudiandae vero deserunt minus labore et, illo dicta consequatur! Deserunt
            sunt in exercitationem. Asperiores quisquam omnis nihil quas hic sequi dolorum obcaecati
            vero quasi? Voluptates exercitationem, impedit ea consequuntur, ab at neque voluptatibus
            inventore nobis laboriosam ex praesentium facilis dolorum harum possimus in, nemo soluta
            accusamus quis. Tempore veritatis dolore laudantium, pariatur iusto facere
            exercitationem quia?
          </p>
        </div>
      </div>
      <style jsx>{`
        .main-page-container {
          padding-top: 200px;
        }
        .model-viewer-container {
          max-height: calc(100vh);
          width: calc(100%);
        }
      `}</style>
    </>
  );
};

export default BrandPageLayout;
