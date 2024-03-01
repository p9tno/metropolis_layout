<!-- begin construction-->
<section class="construction section" id="construction">
    <div class="container_center">

        <?php if (SCF::get( 'map__title' )) { ?>
            <h2 class="section__title"><?php echo SCF::get( 'map__title' ); ?></h2>
        <?php } ?>

        <?php 
            // $args = array(
            //     'post_type' => 'project',
            //     'posts_per_page' => -1,
            // );

            // $query = new WP_Query($args);
            // $show_in_map = 0;

            // if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
            //     $show_in_map = get_post_meta( get_the_ID(), 'project__boolean', true ); 
            //     // get_pr($show_in_map);
            //     if ($show_in_map) {
            //         echo '<hr>';
            //         echo the_ID() . '<br>';
            //         $meta_title = get_post_meta( get_the_ID(), 'project__title', true );
            //         $meta_location = get_post_meta( get_the_ID(), 'project__location', true );
            //         $meta_link = get_post_meta( get_the_ID(), 'project__link', true );
            //         $meta_position_lat = get_post_meta( get_the_ID(), 'project__position_lat', true );
            //         $meta_position_lng = get_post_meta( get_the_ID(), 'project__position_lng', true );
            //         $meta_excerpt = get_post_meta( get_the_ID(), 'project__excerpt', true );
            //         $meta_marker = wp_get_attachment_url(get_post_meta( get_the_ID(), 'project__marker', true ));
            //         $meta_thumb = get_post_meta( get_the_ID(), 'project__thumb', false ); 

            //         echo '<b>meta_title: </b>' . $meta_title . '<br>';
            //         echo '<b>meta_location: </b>' . $meta_location . '<br>';
            //         echo '<b>meta_excerpt: </b>' . $meta_excerpt . '<br>';
            //         echo '<b>meta_link: </b>' . $meta_link . '<br>';
            //         echo '<b>meta_position_lat: </b>' . $meta_position_lat . '<br>';
            //         echo '<b>meta_position_lng: </b>' . $meta_position_lng . '<br>';
            //         echo '<b>meta_marker: </b>' . $meta_marker . '<br>';

            //     }
            // endwhile;
            // endif;
            // wp_reset_postdata();
        ?>
        
        <div class="construction__content">
            <div class="map__wrap" id="wrap">
                <div class="map" id="map"></div>
                <div class="mark">
                    <div class="mark__close"></div>
                    <div class="mark__content"></div>
                </div>
            </div>
        </div>

        <?php 
          $projects = get_posts(array(
            'post_type' => 'project',
            'posts_per_page' => -1,
            ));

            foreach($projects as $project) {

                $post_ID = $project->ID;
                $metas = get_post_meta($post_ID);
                // get_pr($metas);
                // get_pr($project);
            }


        ?>

        <script>
            ((g) => {
                var h,
                    a,
                    k,
                    p = 'The Google Maps JavaScript API',
                    c = 'google',
                    l = 'importLibrary',
                    q = '__ib__',
                    m = document,
                    b = window;
                b = b[c] || (b[c] = {});
                var d = b.maps || (b.maps = {}),
                    r = new Set(),
                    e = new URLSearchParams(),
                    u = () =>
                    h ||
                    (h = new Promise(async (f, n) => {
                        await (a = m.createElement('script'));
                        e.set('libraries', [...r] + '');
                        for (k in g)
                            e.set(
                                k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
                                g[k]
                            );
                        e.set('callback', c + '.maps.' + q);
                        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                        d[q] = f;
                        a.onerror = () => (h = n(Error(p + ' could not load.')));
                        a.nonce = m.querySelector('script[nonce]')?.nonce || '';
                        m.head.append(a);
                    }));
                d[l] ? console.warn(p + ' only loads once. Ignoring:', g) : (d[l] = (f, ...n) => r.add(f) && u().then(
                () => d[l](f, ...n)));
            })({
                key: 'AIzaSyBVY9bdJtxFyjxthJGdsXG7G7A6jXPRFJg',
                // v: 'weekly',
                // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
                // Add other bootstrap parameters as needed, using camel case.
            });

            <?php
                $projects = get_posts(array(
                    'post_type' => 'project',
                    'posts_per_page' => -1,
                ));
                $projectMetas = [];

                foreach($projects as $project) {

                    $post_ID = $project->ID;
                    $metas = get_post_meta($post_ID);

                    if($metas['project__boolean'][0]) {
                        $category = get_the_terms($post_ID, 'project-cat');
                        $post_meta = new StdClass();
                        $post_meta->id = $project->ID;
                        
                        $category_arr = [];
                        if (! empty($category)) { 
                            $total = count($category);
                            $counter = 0;
                            foreach ($category as $cat) {
                                $counter++;
                                if($counter == $total) { $cat_name = $cat->name;
                                } else { $cat_name = $cat->name . ', '; }
                                array_push($category_arr, $cat_name);
                            }
                        }
                        $post_meta->category = $category_arr;
    
                        $post_meta->title = $metas['project__title'][0];
                        $post_meta->place = $metas['project__location'][0];
                        $post_meta->text = SCF::get( 'project__excerpt', $post_ID ); ;
                        
                        if ($metas['project__marker'][0]) {
                            $post_meta->icon = wp_get_attachment_url($metas['project__marker'][0]);
                        } else {
                            $post_meta->icon = get_template_directory_uri() . '/assets/img/marker.svg';
                        }
    
                        $gallery_item = [];
                        foreach ($metas['gallery_item'] as $img_id) { 
                            $img_url = wp_get_attachment_url($img_id);
                            array_push($gallery_item, $img_url);
                        }
                        $post_meta->images = $gallery_item;

                                    
                        $post_meta->coord = $metas['project__position'][0];
                        array_push($projectMetas, $post_meta);

                  
                    }
    
                }

                ?>

            

            const allProjects = <?php echo json_encode($projectMetas); ?>;

            
            const mapMarkers = allProjects.filter((e) => e.coord && !isNaN(+e.coord.split(',')[0]) && !isNaN(+e.coord.split(',')[1])).map((e) => {
                const {
                    coord
                } = e;
                return {
                    ...e,
                    position: {
                        lat: +coord.split(',')[0],
                        lng: +coord.split(',')[1],
                    },
                }
            }) 
            
            console.log(mapMarkers);
            const ram = navigator.deviceMemory;
            const cpu = navigator.hardwareConcurrency;
        </script>
    </div>
</section>
<!-- end construction-->