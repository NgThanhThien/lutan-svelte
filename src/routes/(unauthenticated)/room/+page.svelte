<script>
  let rooms = [ {
    id: 1,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 2,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 3,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 4,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },
  {
    id: 5,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  }]
</script>
<div class="tw-w-full tw-h-96">
  <img class="tw-w-full tw-h-full tw-object-cover" alt="room" src="https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425718953870-KRWW1E2ZRV37M4LV06ME/Ph%C3%B2ng+4+-+Lotus+Green+%281%29.JPG?format=2500w">
</div>
<div class="tw-container tw-mx-auto tw-py-10">
  <div class="tw-w-full tw-flex tw-space-x-4">
    <div class="tw-w-5/12">
      <h2 class="tw-text-xl">??? trong m???t trong nh???ng kh??ch s???n h??ng ?????u!</h2>
      <div class="tw-mt-6">
        <p>V???i t???ng s??? 369 ph??ng g???m s??? ph??ng thu???c kh??ch s???n ban ?????u v?? kh???i condotel m???i, kh??ch du l???ch t???i Lan R???ng Ph?????c H???i s??? c?? ???????c r???t nhi???u l???a ch???n ??a d???ng. G???m 19 lo???i ph??ng r???ng r??i nh?? ph??ng ????i / ph??ng ????i, ph??ng c??n h???, ph??ng gia ????nh v?? bi???t th??? b??n b??? bi???n, t???t c??? ?????u l???y c???m h???ng trang nh?? t??? th???i k??? Ph???c h??ng Ch??u ??u.</p>
        <p>T???t c??? c??c ph??ng ?????u ???????c trang b??? m??y l???nh v?? c?? ban c??ng ri??ng v???i t???m nh??n bao qu??t ra bi???n ho???c v?????n v?? n??i, TV LCD m??n h??nh l???n, k??t an to??n, Wi-FI mi???n ph?? v?? t???t c??? c??c ti???n nghi c???n thi???t cho m???t k??? ngh??? tho???i m??i.</p>
        <p>B???n kh???i condotel kh??c ??ang ???????c x??y d???ng, d??? ki???n khai tr????ng v??o ?????u n??m 2020.</p>
      </div>
    </div>
    <div class="tw-w-7/12">
      <div class="tw-w-full tw-pb-75-percent tw-relative">
        <img src="https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1424162888241-WIRM5TPCOAGTIRB7ANQC/CAMI0086.jpg" class="tw-absolute tw-w-full tw-h-full tw-left-0 tw-top-0 tw-object-cover" alt="room">
      </div>
    </div>
  </div>
  <div class="tw-mt-4 tw-grid tw-grid-cols-3 tw-gap-4">
    {#each rooms as room (room.id) }
    <div class="tw-w-full tw-space-y-4">
      <div class="tw-w-full tw-relative tw-pb-75-percent">
        <img src={room.image} alt={room.name} class="tw-absolute tw-w-full tw-h-full tw-object-cover tw-left-0 tw-top-0">
      </div>
      <div class="tw-space-y-2">
        <h3 class="tw-text-xl tw-text-center">
          {room.name}
        </h3>
        <div class="tw-mt-2 tw-text-center">
          {room.description}
        </div>
      </div>
    </div>
      
    {/each}
  </div>
</div>