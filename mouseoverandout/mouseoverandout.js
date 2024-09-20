
    var fences = [
        Safad_fence, Akka_fence, Alnasra_fence, Haifa_fence, Bahriatabria_fence, Tiberias_fence,
        Bisan_fence, Tubas_fence, Jenin_fence, Nablus_fence, Tulkarm_fence,
        Qalqilya_fence, Yaffa_fence, Ramla_fence, Lod_fence, Salfit_fence,
        Ramallah_fence, Jericho_fence, Jerusalem_fence, Deadsea_fence, 
        Bethlehem_fence, Hebron_fence, Gaza_fence, Beersheba_fence
    ];



// Add mouseover event listener to Safad_fence
Safad_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#9D2326"}); //40% shadow
    this.setOptions({strokeColor: "#FFF"}); //40% shadow
    // Set z-index of Safad_fence to be higher than the others
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
	if(fence !== Safad_fence) {
           fence.setOptions({ zIndex: 0 });
    	}
    });
});
// Add mouseout listener to revert fillColor
Safad_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#9D3327"});
    this.setOptions({strokeColor: "#9D3327"});
});



Ramla_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#F4A257"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Ramla_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Ramla_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#F4A256"});
    this.setOptions({strokeColor: "#F4A256"});
});



Nablus_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#B67939"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Nablus_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Nablus_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#B67928"});
    this.setOptions({strokeColor: "#B67928"});
});


Haifa_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#FAEBC5"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Haifa_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Haifa_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#FAEBD4"});
    this.setOptions({strokeColor: "#FAEBD4"});
});


Bisan_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#5D3F73"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bisan_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bisan_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#5D3F63"});
    this.setOptions({strokeColor: "#5D3F63"});
});


Beersheba_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#241E30"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Beersheba_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Beersheba_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#241E20"});
    this.setOptions({strokeColor: "#241E20"});
});



Akka_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#86664C"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Akka_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Akka_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#86624C"});
    this.setOptions({strokeColor: "#86624C"});
});

Tulkarm_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#59593D"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tulkarm_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tulkarm_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#59583C"});
    this.setOptions({strokeColor: "#59583C"});
});

Jericho_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jericho_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jericho_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});

Hebron_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BC2136"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Hebron_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Hebron_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#BC2125"});
    this.setOptions({strokeColor: "#BC2125"});
});

Lod_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Lod_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Lod_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});



Jenin_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#ECF0FF"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jenin_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jenin_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#ECF0EF"});
    this.setOptions({strokeColor: "#ECF0EF"});
});

Salfit_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#3377BB"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Salfit_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Salfit_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#3399CC"});
    this.setOptions({strokeColor: "#3399CC"});
});

Gaza_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#753F7C"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Gaza_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Gaza_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#753F7B"});
    this.setOptions({strokeColor: "#753F7B"});
});



Alnasra_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#5B8A7B"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Alnasra_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Alnasra_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#5B8A78"});
    this.setOptions({strokeColor: "#5B8A78"});
});

Qalqilya_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#959585"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Qalqilya_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Qalqilya_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#A9A9A9"});
    this.setOptions({strokeColor: "#A9A9A9"});
});

Jerusalem_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#9C624D"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jerusalem_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jerusalem_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#9C623D"});
    this.setOptions({strokeColor: "#9C623D"});
});



Tiberias_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#3E7C96"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tiberias_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tiberias_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#3E7C95"});
    this.setOptions({strokeColor: "#3E7C95"});
});

Tubas_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BA4000"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tubas_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tubas_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#D84315"});
    this.setOptions({strokeColor: "#D84315"});
});

Yaffa_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#84374A"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Yaffa_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Yaffa_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#843749"});
    this.setOptions({strokeColor: "#843749"});
});

Ramallah_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#B3587A"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Ramallah_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Ramallah_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#B35879"});
    this.setOptions({strokeColor: "#B35879"});
});



Bethlehem_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#693038"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bethlehem_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bethlehem_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#693037"});
    this.setOptions({strokeColor: "#693037"});
});



Deadsea_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#1e80EE"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Deadsea_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Deadsea_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#1e90ff"});
    this.setOptions({strokeColor: "#1e90ff"});
});



Bahriatabria_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#1e80EE"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bahriatabria_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bahriatabria_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#1e90ff"});
    this.setOptions({strokeColor: "#1e90ff"});
});